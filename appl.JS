/*function Login(form)
{
var username = form.username.value;
var password = form.password.value;

if (password != 152)
{ alert("Mot de Passe invalide ..."); }
else 
{ alert("Mot de Passe valide ... "); }
}*/

//------------------------------fonction abandonner------------------------    //
function confirmation(form)
{
            
            var rep = confirm("Voulez-vous vraiment abandonner ?")

            if(rep == true)
            {
            
                document.location.href="page1.HTML";
            }
            else{
            
                alert ("Reprise dans 3...2...1");
            }
}
