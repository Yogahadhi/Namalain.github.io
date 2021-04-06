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
                            
                            if(namaNegara === 'Indonesia'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#indo').html(
                                    $('#positif_indo').html(positif)+
                                    $('#mati_indo').html(mati)+
                                    $('#sembuh_indo').html(sembuh)
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

                            if(namaNegara === 'Malaysia'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#malay').html(
                                    $('#positif_malay').html(positif)+
                                    $('#mati_malay').html(mati)+
                                    $('#sembuh_malay').html(sembuh)
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

                            if(namaNegara === 'Singapore'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#singa').html(
                                    $('#positif_singa').html(positif)+
                                    $('#mati_singa').html(mati)+
                                    $('#sembuh_singa').html(sembuh)
                                )
                            }

                            if(namaNegara === 'Vietnam'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#viet').html(
                                    'Positif : '+positif+' Orang <br>'+
                                    'Meninggal : '+mati+' Orang <br>'+
                                    'Sembuh : '+sembuh+' Orang'
                                )
                            }

                            if(namaNegara === 'Vietnam'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#vietnam').html(
                                    $('#positif_vie').html(positif)+
                                    $('#mati_vie').html(mati)+
                                    $('#sembuh_vie').html(sembuh)
                                )
                            }

                            if(namaNegara === 'Thailand'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#thailand').html(
                                    'Positif : '+positif+' Orang <br>'+
                                    'Meninggal : '+mati+' Orang <br>'+
                                    'Sembuh : '+sembuh+' Orang'
                                )
                            }

                            if(namaNegara === 'Thailand'){
                                var positif = dataNegara.cases;
                                var mati = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;
                                $('#thail').html(
                                    $('#positif_thai').html(positif)+
                                    $('#mati_thai').html(mati)+
                                    $('#sembuh_thai').html(sembuh)
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