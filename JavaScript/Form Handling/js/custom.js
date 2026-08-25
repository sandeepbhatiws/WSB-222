
var getUserData = localStorage.getItem('user_info');
getUserData = JSON.parse(getUserData);

// var allUserData = getUserData ?? [];

var allUserData = getUserData ? getUserData : [];

const displayData = (getUserInfo) => {
    if(getUserInfo.length > 0){

        var dataDisplay = '';

        getUserInfo.forEach((v,i) => {
            dataDisplay += `<tr>
                <td class="py-2 px-4 border-b">${ i+1 }</td>
                <td class="py-2 px-4 border-b">${ v.name }</td>
                <td class="py-2 px-4 border-b">${ v.email }</td>
                <td class="py-2 px-4 border-b">${ v.mobile_number }</td>
                <td class="py-2 px-4 border-b">${ v.address }</td>
            </tr>`
        })

        document.querySelector('#user-data').innerHTML = dataDisplay;

    } else {
        var dataDisplay = `<tr>
            <td class="py-2 px-4 border-b text-center font-bold" colspan="5">No Record Found !!</td>
        </tr>`;

        document.querySelector('#user-data').innerHTML = dataDisplay;
    }
}

displayData(allUserData);


document.getElementById('form-handler').addEventListener('submit', (event) => {
    event.preventDefault();

    const userData = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        mobile_number : event.target.mobile.value,
        address : event.target.address.value
    };

    // allUserData.unshift(userData);

    allUserData = [userData, ...allUserData];

    var localData = JSON.stringify(allUserData);
    localStorage.setItem('user_info', localData)


    displayData(allUserData)

    event.target.reset();

    // document.getElementById('name').value = '';
    // document.getElementById('email').value = '';

    console.log(event.target);
})