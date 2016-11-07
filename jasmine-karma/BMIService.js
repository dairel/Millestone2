var BMIService = {
         
          Calculoprincipal: function(weight, height){

              if(typeof(weight) ==  'number' && typeof(height) == 'number' ) {
                           return weight / (height * height);

              }
                return null;

          }

}