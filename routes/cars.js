
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
                {id: '71', name: '奔驰S级 2012款 S300L 商务简配型', color: 'red', size: '5230*1871*1485'},
                {id: '72', name: '奔驰S级 2012款 S300L 商务型 Grand Edition', color: 'GREEN', size: '5230*1871*1485'},
                {id: '73', name: '奔驰S级 2012款 S300L 尊贵型 Grand Edition', color: 'red', size: '5230*1871*1485'},
                {id: '74', name: '奔驰S级 2012款 S300L 豪华型 Grand Edition', color: 'red', size: '5230*1871*1485'},
                {id: '75', name: '奔驰S级 2012款 S350L Grand Edition', color: 'red', size: '5230*1871*1485'},
                {id: '76', name: '奔驰S级 2012款 S350L 4MATIC Grand Edition', color: 'red', size: '5230*1871*1485'},
                {id: '77', name: '奔驰S级 2012款 S400L HYBRID Grand Edition', color: 'red', size: '5230*1871*1485'},
                {id: '78', name: '奔驰S级 2012款 S500L 4MATIC Grand Edition', color: 'red', size: '5230*1871*1485'},
                {id: '79', name: '奔驰S级 2012款 S500L 4MATIC Grand Edition', color: 'red', size: '5230*1871*1485'},
            ];        
            break;
        case '22222222':
            response = [
                {id: '61', name: '奥迪A8 2013款 A8L 30 FSI 舒适型', color: 'red', size: '5267*1949*1460'},
                {id: '62', name: '奥迪A8 2013款 A8L 30 FSI 舒适型', color: 'red', size: '5267*1949*1460'},
                {id: '63', name: '奥迪A8 2013款 A8L 30 FSI 舒适型', color: 'red', size: '5267*1949*1460'},
                {id: '64', name: '奥迪A8 2013款 A8L 30 FSI 舒适型', color: 'red', size: '5267*1949*1460'},
                {id: '65', name: '奥迪A8 2013款 A8L 30 FSI 舒适型', color: 'Green', size: '5267*1949*1460'},
                {id: '66', name: '奥迪A8 2013款 A8L 30 FSI 舒适型', color: 'red', size: '5267*1949*1460'},
                {id: '667', name: '奥迪A8 2013款 A8L 30 FSI 舒适型', color: 'red', size: '5267*1949*1460'},
                {id: '68', name: '奥迪A8 2013款 A8L 30 FSI 舒适型', color: 'red', size: '5267*1949*1460'},
                {id: '69', name: '奥迪A8 2013款 A8L 30 FSI 舒适型', color: 'red', size: '5267*1949*1460'},
            ];   
            break;
        case '33333333':
            response = [
                {id: '51', name: '宝马7系 2013款 730Li 领先型', color: 'GREEN', size: '5212*1902*1498'},
                {id: '53', name: '宝马7系 2013款 730Li 领先型', color: 'GREEN', size: '5212*1902*1498'},
                {id: '56', name: '宝马7系 2013款 730Li 领先型', color: 'GREEN', size: '5212*1902*1498'},
                {id: '57', name: '宝马7系 2013款 730Li 领先型', color: 'GREEN', size: '5212*1902*1498'},
                {id: '58', name: '宝马7系 2013款 730Li 领先型', color: 'GREEN', size: '5212*1902*1498'},
                {id: '59', name: '宝马7系 2013款 730Li 领先型', color: 'GREEN', size: '5212*1902*1498'},
            ];   
            break;
        default:
            response = [
                {id: '1', name: '捷豹XJ 2013款 XJL 2.0T 典雅商务版', color: 'red', size: '5252*1950*1457'},
                {id: '4', name: '捷豹XJ 2013款 XJL 2.0T 典雅商务版', color: 'red', size: '5252*1950*1457'},
                {id: '5', name: '捷豹XJ 2013款 XJL 2.0T 典雅商务版', color: 'red', size: '5252*1950*1457'},
                {id: '6', name: '捷豹XJ 2013款 XJL 2.0T 典雅商务版', color: 'red', size: '5252*1950*1457'},
                {id: '7', name: '捷豹XJ 2013款 XJL 2.0T 典雅商务版', color: 'red', size: '5252*1950*1457'},
                {id: '8', name: '捷豹XJ 2013款 XJL 2.0T 典雅商务版', color: 'red', size: '5252*1950*1457'},
                {id: '24', name: '捷豹XJ 2013款 XJL 2.0T 典雅商务版', color: 'red', size: '5252*1950*1457'},
                {id: '35', name: '捷豹XJ 2013款 XJL 2.0T 典雅商务版', color: 'red', size: '5252*1950*1457'},
                {id: '46', name: '捷豹XJ 2013款 XJL 2.0T 典雅商务版', color: 'red', size: '5252*1950*1457'},
                {id: '9', name: '捷豹XJ 2013款 XJL 2.0T 典雅商务版', color: 'red', size: '5252*1950*1457'},
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