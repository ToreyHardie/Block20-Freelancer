const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById('root');

    const h1Heading = document.createElement('h1');
    h1Heading.textContent = 'FREELANCERS';
    root.appendChild(h1Heading);

    const userList = document.createElement('ul');
    userList.id = 'userList';
    root.appendChild(userList);

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const listofItems = document.createElement('li');
        listofItems.textContent = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
        userList.appendChild(listofItems);
    }
}

// Call the main function
main();

