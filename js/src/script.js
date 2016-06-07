//let a = 2;
//let b = 3;
//console.log(`${a} + ${b} = ${a+b}`);

//function showText(title, a, b){
//    console.log(`${title} ${a} ${b}`);
//}
//showText('hello', a, b);
$(() => {

    var testObj = {
        question1:{ question : "Кто получит бесплатный сыр в мышеловке?",
            answer1: "Кот",
            answer2: "Вторая мышь",
            answer3: "Его там не было"},

        question2:{ question : "Как вы думаете, какой рукой лучше всего размешивать кофе со сливками и с сахаром?",
            answer1: "Правой",
            answer2: "Левой",
            answer3: "Той в которой ложка"},

        question3:{ question : "Почему нельзя пугать страусов в зоопарке?",
            answer1: "Перестанут нестись",
            answer2: "Пол бетонный",
            answer3: "Их там нет"},

        answers:{ question1: "answer2", question2: "answer3", question3: "answer2"}
    };

localStorage.setItem('Questions',JSON.stringify(testObj));
const test = localStorage.getItem('Questions');

const html = $('#my_tmpl').html();
const data = JSON.parse(test);
const content = tmpl(html, data);
$('div.content_wrapper').append(content);
$('input#button-result').click(() => {
    let allInputs = $('input[type=radio]:checked:not(script input[type=radio])');
//console.log(allInputs.length);
let count=0;
let result=0;
let countQ=$('.list-questions li:not(script li)').length;
console.log(countQ);
let countA=allInputs.length;

if(countA==countQ && countA!=0){
    for(let i = 0, j=1; i < allInputs.length;j++, i++){
        if(allInputs[i].getAttribute('value') == data.answers["question" + j])++count;
    }
    result=(count*100)/countQ;
    const modalHtml = $('#my_tmpl_modal').html();
    let strResult = {text: "Количество правильных ответов: <br/>" + result.toFixed(0) + " %  "};
    const content_modal = tmpl(modalHtml, strResult);
    $('div.content_wrapper').append(content_modal);
    allInputs=null;
    countA=0;
    strResult=null;
    result=0;
    $('input[type=radio]:checked:not(script input[type=radio])').each(function(){$(this).removeAttr("checked");});
}
else {
    const modalHtml2 = $('#my_tmpl_modal').html();
    const strResult2 = {text: "Ответьте на все вопросы!"};
    const content_modal2 = tmpl(modalHtml2, strResult2);
    $('div.content_wrapper').append(content_modal2);

}
module.exports = allInputs;
});
//Удаляем модальные окна по клику в body
$('body').click(() =>{
    $('div.modal-backdrop.fade.in').remove();
$('div.modal.fade.bs-example-modal-sm.in').remove();
$('div.modal').remove;

});

});//end ready

