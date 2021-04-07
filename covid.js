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
                    $('#positif_global').html(Number(positif).toLocaleString('id'));
                    $('#mati_global').html(Number(mati).toLocaleString('id'));
                    $('#sembuh_global').html(Number(sembuh).toLocaleString('id'));
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
                                    $('#positif_indo').html(Number(positif).toLocaleString('id'))+
                                    $('#mati_indo').html(Number(mati).toLocaleString('id'))+
                                    $('#sembuh_indo').html(Number(sembuh).toLocaleString('id'))
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
                                    $('#positif_malay').html(Number(positif).toLocaleString('id'))+
                                    $('#mati_malay').html(Number(mati).toLocaleString('id'))+
                                    $('#sembuh_malay').html(Number(sembuh).toLocaleString('id'))
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
                                    $('#positif_singa').html(Number(positif).toLocaleString('id'))+
                                    $('#mati_singa').html(Number(mati).toLocaleString('id'))+
                                    $('#sembuh_singa').html(Number(sembuh).toLocaleString('id'))
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
                                    $('#positif_vie').html(Number(positif).toLocaleString('id'))+
                                    $('#mati_vie').html(Number(mati).toLocaleString('id'))+
                                    $('#sembuh_vie').html(Number(sembuh).toLocaleString('id'))
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
                                    $('#positif_thai').html(Number(positif).toLocaleString('id'))+
                                    $('#mati_thai').html(Number(mati).toLocaleString('id'))+
                                    $('#sembuh_thai').html(Number(sembuh).toLocaleString('id'))
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
