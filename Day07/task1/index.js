var CHildObjectWindow = null;

function OpenChildPage() {
    CHildObjectWindow = window.open("Child.html", "MyChildPage", "width=400,height=300");
    console.log(CHildObjectWindow);
}
