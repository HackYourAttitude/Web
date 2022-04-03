window.onload  = function(){

    document.getElementById('button').addEventListener('click',CollectContactForm)

}

function CollectContactForm()
{
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let issue = document.getElementById('issue').value;
    let question = document.getElementById('question').value;
    if(validateUserInput(name,email,question))
    {
        let dataPackage = {
            "Name": name,
            "Email": email,
            "Issue": issue,
            "Question":question
        }
        SendUserInput(dataPackage);
    }


}

function validateUserInput(name, email, question)
{
        if(name === "")
        {
            alert('Podaj imie !');
            return false;
        }
        if(email === "")
        {
            alert('Podaj email !')
            return false;
        }
        if(question === "")
        {
            alert('Zadaj pytanie !')
            return false;
        }
        return true;

}

function SendUserInput(dataPackage)
{
    fetch("/kontakt", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataPackage)
    }).then(response => response.status)
        .then(data =>CheckResponseAndReact(data))

}

function CheckResponseAndReact(data)
{
    if(data === 200)
        alert('Twój formularz został wysłany')
    else
        alert('Coś poszło nie tak, spróbuj ponownie ')
}