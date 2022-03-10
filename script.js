$(document).ready(function(){
            

            const $game = $('<div>').addClass('game');
            for(let row = 0; row < this.countRow; row++){
                const $row = $('<div>')
                    .addClass('row empty');
    
                for(let col = 0; col < this.countCol; col++) {
                        const $col = $('<div>')
                            .addClass('col empty')
                        $row.append($col);
                }
                $game.append($row);
            }
            $(body).append($game);
            
            
        }


      
    


});

