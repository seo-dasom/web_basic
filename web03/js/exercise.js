function exercise1(node) {
    let date = new Date();
    if (node.children.length <= 1) {
        for(let year = date.getFullYear(); year >= 1970; year--) {
            // let option = document.createElement("option");
            // option.setAttribute("value", year);
            // option.innerText = year;
            // node.appendChild(option);
            let option = $("<option></option>")
            option.attr("value", year);
            option.text(year);
            $("#"+node.id).append(option);
        }
    }
}

function exercise8(node) {
    let date = new Date();
    if (node.children.length <= 1) {
        for(let year = date.getFullYear(); year > date.getFullYear() - 20; year--) {
            let option = $("<option></option>")
            option.attr("value", year);
            option.text(year);
            $(node).append(option);
        }
    }

    // node.addEventListener('change', funtion() {
    //     if(this.lastChild.value == this.value) {
    //         for(let year = this.value - 1; year > this.value - 11; year--) {
    //             let option = document.createElement('option');
    //             option.value = year;
    //             option.innerText = year;
    //             this.appendChild(option);
    //         }
    //     }
    // })

    $(node).on('change', function() {
        if ($(this).children().last().val() == $(this).val()) {
            for(let year = $(this).val() - 1; year > $(this).val() - 11; year--) {
                let option = $("<option></option>")
                option.attr("value", year);
                option.text(year);
                $(this).append(option);
            }
        }
    });
}