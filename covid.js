$(document).ready(function(){
    Global();
    Asia();
    setInterval(function(){
        Global();
        Asia();
    }, 3000);
    
    
    function Global(){
        $.getJSON({
            url : 'https://covid19.mathdro.id/api',
            success : function(data){
                try{
                    var positif = data.confirmed.value;
                    var mati = data.deaths.value;
                    var sembuh = data.recovered.value;
                    $('#positif_global').html(Number(positif).toLocaleString('id'));
                    $('#mati_global').html(Number(mati).toLocaleString('id'));
                    $('#sembuh_global').html(Number(sembuh).toLocaleString('id'));
                }catch{
                    alert('error');
                }
            }
        });
    }

    function Asia(){
                        $.getJSON({
                            url : 'https://covid19.mathdro.id/api/countries/Indonesia',
                            success : function(data){
                                try{
                    
                                var positif = data.confirmed.value;
                                var mati = data.deaths.value;
                                var sembuh = data.recovered.value;
                                    $('#positif_indo').html(Number(positif).toLocaleString('id'));
                                    $('#mati_indo').html(Number(mati).toLocaleString('id'));
                                    $('#sembuh_indo').html(Number(sembuh).toLocaleString('id'));
                                }catch{
                                    alert('Error');
                                }
                            }
                        });

                        $.getJSON({
                            url : 'https://covid19.mathdro.id/api/countries/Malaysia',
                            success : function(data){
                                try{
                                var positif = data.confirmed.value;
                                var mati = data.deaths.value;
                                var sembuh = data.recovered.value;
                                    $('#positif_malay').html(Number(positif).toLocaleString('id'));
                                    $('#mati_malay').html(Number(mati).toLocaleString('id'));
                                    $('#sembuh_malay').html(Number(sembuh).toLocaleString('id'));
                                }catch{
                                    alert('Error');
                                }
                            }
                        });


                            $.getJSON({
                                url : 'https://covid19.mathdro.id/api/countries/Singapore',
                                success : function(data){
                                    try{
                                var positif = data.confirmed.value;
                                var mati = data.deaths.value;
                                var sembuh = data.recovered.value;
                                    $('#positif_singa').html(Number(positif).toLocaleString('id'));
                                    $('#mati_singa').html(Number(mati).toLocaleString('id'));
                                    $('#sembuh_singa').html(Number(sembuh).toLocaleString('id'));
                                }catch{
                                    alert('Error');
                                }
                            }
                        });
    

                            $.getJSON({
                                url : 'https://covid19.mathdro.id/api/countries/Vietnam',
                                success : function(data){
                                    try{
                                var positif = data.confirmed.value;
                                var mati = data.deaths.value;
                                var sembuh = data.recovered.value;
                                    $('#positif_vie').html(Number(positif).toLocaleString('id'));
                                    $('#mati_vie').html(Number(mati).toLocaleString('id'));
                                    $('#sembuh_vie').html(Number(sembuh).toLocaleString('id'));
                                }catch{
                                    alert('Error');
                                }
                            }
                        });


                            $.getJSON({
                                url : 'https://covid19.mathdro.id/api/countries/Thailand',
                                success : function(data){
                                    try{
                                var positif = data.confirmed.value;
                                var mati = data.deaths.value;
                                var sembuh = data.recovered.value;
                                    $('#positif_thai').html(Number(positif).toLocaleString('id'));
                                    $('#mati_thai').html(Number(mati).toLocaleString('id'));
                                    $('#sembuh_thai').html(Number(sembuh).toLocaleString('id'));
                                }catch{
                                    alert('Error');
                                }
                            }
                        });
    }
})    
function Kembali(){
    history.go(-1);
}
