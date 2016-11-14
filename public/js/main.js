(function() {
    $.get('/dht11', function(res) {
        $('#temp').html(res.current.temperature + 'st.C');
        $('#hum').html(res.current.humidity + '%');

        createHumidityChart(res.historical)
    })



    // humidity chart
    function createHumidityChart(data) {
        var humidity_data = _.pluck(data, 'humidity');
        var time = _.pluck(data, 'time');
        console.log('humidity_data', humidity_data);
        var humidity_chart_container = document.getElementById("humidity_chart");

        var humidity_chart = Chart.Line(humidity_chart_container, {
            data: {
                labels: time,
                datasets: [humidity_data]
            }
        });
    }
})()