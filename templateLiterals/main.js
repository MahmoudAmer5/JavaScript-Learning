let userName = "Mahmoud", userAge = 25, userGender = "Male", userId = 4664815 , userCountry = "Egypt", userBirthDate = "2001-5-10";
let Temp = `
<div class ="user">
    <h2>${userName}</h2>
    <p>Age: ${userAge}</p>
    <p>Gender: ${userGender}</p>
    <p>ID: ${userId}</p>
    <p>Country: ${userCountry}</p>
    <span>Birth Date: ${userBirthDate}</span>
</div>
<style>
.user{
    display: inline-block;
    width: 300px;
    height: 200px;
`;
document.write(Temp);
document.write(Temp);
document.write(Temp);
document.write(Temp);