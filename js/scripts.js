let btnForm = document.querySelector("#comments-form button");
let countComments = 0;
let idComment = 0;
let max_num = Number.NEGATIVE_INFINITY;
console.log(max_num);

btnForm.onclick = function() {
  idComment++;
  let form = document.querySelector("#comments-form");
  if (form.name.value.length < 4) {
    document.querySelector("#error").innerHTML = "Довжина імені не менше 4 символів";
    return false;
  }else if (form.comment.value.length < 10) {
    document.querySelector("#error").innerHTML = "Довжина коментаря не менше 10 символів";
    return false;
}
  document.querySelector("#error").innerHTML = "";
//add comment
  if (countComments == 0) {
    document.querySelector("#comments").innerHTML = "";
}
  countComments ++;
  document.querySelector(".count-comm").innerHTML = countComments;

  let newComment = "<div class='comment' id='block-"+
  idComment+"'>"+
  "<span class='delete' onclick='delComm("+
  idComment+")'>&times;</span>"+
  "<p class='name'>"+form.name.value+"</p>"+
  "<p class='mess'>"+form.comment.value+"</p>"
  +"</div>";

  document.querySelector("#comments").insertAdjacentHTML('afterbegin', newComment);
  //beforeend
  //clear comments
  form.comment.value = "";

};
function delComm(id){
  document.querySelector("#block-"+id).remove();
  countComments--;
  document.querySelector(".count-comm").innerHTML = countComments;

  if (countComments == 0) {
    document.querySelector("#comments").innerHTML = "No comments";
}
}
