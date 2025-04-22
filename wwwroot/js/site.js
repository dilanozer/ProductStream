var toastTimeout;

$(document).ready(function () {
    const connection = new window.signalR.HubConnectionBuilder().withUrl("/hub").build();

    connection.start().then(() => {console.log("Baglanti saglandi")});

    connection.on("AlertCompleteFile", (downloadPath) => {
        clearTimeout(toastTimeout);

        $(".toast-body").html(`
            <p>Excel creation process has been completed. You can download the Excel file using the link below.</p>
            <a href="${downloadPath}">download</a>`);
        
        $("#liveToast").show();
    });
})

