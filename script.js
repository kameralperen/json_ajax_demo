document.querySelector("#getEmployee").addEventListener("click", loadEmployee);

function loadEmployee() {

    var loadingImg = document.querySelector("#loading");
    loadingImg.style.display = "block";


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "employees.json", true);

    setTimeout(() => {
        xhr.onload = function () {
            loadingImg.style.display = "none";

            if (this.status === 200) {
                console.log(this.responseText);

                let employees = JSON.parse(this.responseText);

                let html = "";

                employees.forEach(employee => {
                    html += `<tr>
                        <td>${employee.firstName}</td>
                        <td>${employee.lastName}</td>
                        <td>${employee.age}</td>
                        <td>${employee.retired}</td>
                        </tr>`;
                });

                document.querySelector("#employees").innerHTML = html;
            }
        }

        xhr.send();
    }, 1500);


}