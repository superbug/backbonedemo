
/*
 * GET cars listing.
 */

exports.cars = function(req, res){
    console.log(req.params.id);
    var response = null;
    console.log(req.params.id);
    switch (req.params.id) {
        case '11111111':
            response = [
                {id: '71', name: '######AAAAA', color: 'red', size: 8},
                {id: '72', name: '#######BBBBB', color: 'GREEN', size: 9},
                {id: '73', name: '#######CCCCC', color: 'red', size: 4},
                {id: '74', name: '#######DDDDD', color: 'red', size: 6},
                {id: '75', name: '#######EEEEE', color: 'red', size: 3},
                {id: '76', name: '#######FFFFF', color: 'red', size: 2},
                {id: '77', name: '#######GGGGG', color: 'red', size: 4},
                {id: '78', name: '#######HHHHH', color: 'red', size: 65},
                {id: '79', name: '#######JJJJJ', color: 'red', size: 67},
            ];        
            break;
        case '22222222':
            response = [
                {id: '61', name: '++++++AAAAAA', color: 'red', size: 8},
                {id: '62', name: '++++++BBBBBB', color: 'GREEN', size: 9},
                {id: '63', name: '++++++CCCCCC', color: 'red', size: 4},
                {id: '64', name: '++++++DDDDDD', color: 'red', size: 6},
                {id: '65', name: '++++++EEEEEE', color: 'red', size: 3},
                {id: '66', name: '++++++FFFFFF', color: 'red', size: 2},
                {id: '667', name: '++++++GGGGGG', color: 'red', size: 4},
                {id: '68', name: '++++++HHHHHH', color: 'red', size: 65},
                {id: '69', name: '++++++KKKKKK', color: 'red', size: 67},
            ];   
            break;
        case '33333333':
            response = [
                {id: '51', name: '!!!!!!!!!!BBBBB', color: 'GREEN', size: 9},
                {id: '53', name: '@@@@@@@@@@EEEEE', color: 'red', size: 3},
                {id: '56', name: '@@@@@@@@FFFFF', color: 'red', size: 2},
                {id: '57', name: '@@@@@@GGGGG', color: 'red', size: 4},
                {id: '58', name: '@@@@@HHHHH', color: 'red', size: 65},
                {id: '59', name: '@@@@@@@@@@JJJJJ', color: 'red', size: 67},
            ];   
            break;
        default:
            response = [
                {id: '1', name: '%%%%%%%%%%%%%%%%%%%%%%CCCCC', color: 'red', size: 4},
                {id: '4', name: '%%%%%%%%%%%DDDD%%%%%D', color: 'red', size: 6},
                {id: '5', name: '%%%%%%%%%%EEEEE%%%%%', color: 'red', size: 3},
                {id: '6', name: '%%%%%%%%%FFF%%%%%%%%%FF', color: 'red', size: 2},
                {id: '7', name: '%%%%%%%%%%%%GGG%%%%%%%GG', color: 'red', size: 4},
                {id: '8', name: '%%%%%%%%%%%HHHHH', color: 'red', size: 65},
                {id: '24', name: '#######DDDDD', color: 'red', size: 6},
                {id: '35', name: '#######EEEEE', color: 'red', size: 3},
                {id: '46', name: '#######FFFFF', color: 'red', size: 2},
                {id: '9', name: '%%%%%%%JJJ%%%%%%%%JJ', color: 'red', size: 67},
            ];   
            break;
    }
    res.send(response);
};

exports.updatecar = function(req, res) {
    res.send(200);
}

exports.addcar = function(req, res) {
    res.send(200);
}

exports.deletecar = function(req, res) {
    res.send(200);
}