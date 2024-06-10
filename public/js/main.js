const submitbtn = document.querySelector("#submitBtn");
const cityName = document.querySelector("#cityName");
const city_name = document.querySelector("#city_name")
const temp_status = document.getElementById("temp_status");
const temp_rel_val= document.querySelector("#temp-rel-val");
const data_hide = document.querySelector(".data_hide"); 



const getInfo = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;
    if (cityval === "") {

        city_name.innerHTML = `Plz write the name before search `
        data_hide.classList.add('data_hide')
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=ca904617cd5340db9ac373417d27c4bb`
            const responce = await fetch(url);
            const data = await responce.json();
            const arrData = [data];
           
                

            temp_rel_val.innerHTML = arrData[0].main.temp;

            const tempMode = arrData[0].weather[0].main;

            
            city_name.innerHTML = `${arrData[0].name} ,${arrData[0].sys.country}`

            // condition to cheack sunny or sloud 

            if (tempMode == "Sunny") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' id='sun' style='color:#eccc68;'></i>"
            }
            else if (tempMode == "Clouds") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' id='sun' style='color:#dfe4eaa;'></i>"
            }
            else if (tempMode == "Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' id='sun' style='color:#a4b0be;'></i>"
            }
            else if (tempMode == "Clear") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' id='sun' style='color:#eccc68;'></i>"
            }
            else {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud'id='sun' style='color:#44c3de;'></i>"
            }



            data_hide.classList.remove('data_hide')



       
        } catch {
            city_name.innerHTML = "Plz enter the city name properly"
            data_hide.classList.add('data_hide')
        }

    }




}
submitbtn.addEventListener('click', getInfo);
