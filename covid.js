$(document).ready(function(){
    Dunia();
    Negara();
    setInterval(function(){
        Dunia();
        Negara();
    }, 3000);
    
    
    function Dunia(){
        $.ajax({
            url : 'https://coronavirus-19-api.herokuapp.com/all',
            success : function(data){
                try{
                    var positif = data.cases;
                    var mati = data.deaths;
                    var sembuh = data.recovered; 
                    $('#positif_global').html(positif);
                    $('#mati_global').html(mati);
                    $('#sembuh_global').html(sembuh);
                }catch{
                    alert('error');
                }
            }
        });
    }
    function Negara(){
        $.ajax({
            url : 'https://coronavirus-19-api.herokuapp.com/countries',
            success : function(data){
                try{
                    var json = data;
                    if(json.length>0){
                        var i;
                        for(i = 0; i < json.length; i++){
                            var dataNegara = json[i];
                            var namaNegara = dataNegara.country;

                            if(namaNegara === 'Indonesia'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#indonesia').html(
                                    'Positif : '+positif+' Orang <br>'+
                                    'Meninggal : '+mati+' Orang <br>'+
                                    'Sembuh : '+sembuh+' Orang'
                                )
                            }
                            if(namaNegara === 'Malaysia'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#malaysia').html(
                                    'Positif : '+positif+' Orang <br>'+
                                    'Meninggal : '+mati+' Orang <br>'+
                                    'Sembuh : '+sembuh+' Orang'
                                )
                            }

                            if(namaNegara === 'Singapore'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#singapura').html(
                                    'Positif : '+positif+' Orang <br>'+
                                    'Meninggal : '+mati+' Orang <br>'+
                                    'Sembuh : '+sembuh+' Orang'
                                )
                            }
                            if(namaNegara === 'Timor-Leste'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#timor_leste').html(
                                    'Positif : '+positif+' Orang <br>'+
                                    'Meninggal : '+mati+' Orang <br>'+
                                    'Sembuh : '+sembuh+' Orang'
                                )
                            }
                            if(namaNegara === 'Brunei'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#brunei').html(
                                    'Positif : '+positif+' Orang <br>'+
                                    'Meninggal : '+mati+' Orang <br>'+
                                    'Sembuh : '+sembuh+' Orang'
                                )
                            }
                        }
                    }
                }catch{
                    alert('error');
                }
            }
        });
    }
})
function Kembali(){
    history.go(-1);
}