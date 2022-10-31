$(document).ready(function(){
    $(document).on('submit','#myform',function(){
        var data = $('form').serializeArray();
        var new_data = []
        for (var key in data){
            let n = data[key]["name"]
            let value = data[key]["value"]
            new_data[n] = value
        }
        console.log(new_data)
        let html = `<div class="name">Name: ${new_data.name}</div>
        <div class="email">Email : ${new_data.email}</div>
        <div class="website">Website : ${new_data.website}</div>
        <div class="gender">Gender : ${new_data.gender}</div>
        <div class="skills">Skills : ${new_data.skill}</div>`;
        let d = document.createElement('div');
        let add = $(d).addClass('data_div').html(html);
        $('.students_div').append(add);
        return false
    })
})
