module.exports = function toReadable (number) {
    let a = ''
    let b = ''
    let c = ''
    
    let text = number.toString()
    if (text.length === 1) {
        if (text[0] === '0') {
            c = 'zero'
        }
        if (text[0] === '1') {
            c = 'one'
        }
        if (text[0] === '2') {
            c = 'two'
        }
        if (text[0] === '3') {
            c = 'three'
        }
        if (text[0] === '4') {
            c = 'four'
        }
        if (text[0] === '5') {
            c = 'five'
        }
        if (text[0] === '6') {
            c = 'six'
        }
        if (text[0] === '7') {
            c = 'seven'
        }
        if (text[0] === '8') {
            c = 'eight'
        }
        if (text[0] === '9') {
            c = 'nine'
        }
        //From 0 to 9
        return c;
    }
    if (text.length === 2){ 
        if (text[0] === '1' && text[1] === '0') {
            b = 'ten'
            return b
        }if (text[0] === '1' && text[1] === '1') {
            b = 'eleven'
            return b
        }if (text[0] === '1' && text[1] === '2') {
            b = 'twelve'
            return b
        }if (text[0] === '1' && text[1] === '3') {
            b = 'thirteen'
            return b
        }if (text[0] === '1' && text[1] === '4') {
            b = 'fourteen'
            return b
        }if (text[0] === '1' && text[1] === '5') {
            b = 'fifteen'
            return b
        }if (text[0] === '1' && text[1] === '6') {
            b = 'sixteen'
            return b
        }if (text[0] === '1' && text[1] === '7') {
            b = 'seventeen'
            return b
        }if (text[0] === '1' && text[1] === '8') {
            b = 'eighteen'
            return b
        }if (text[0] === '1' && text[1] === '9') {
            b = 'nineteen'
            return b
        }
        //From 10 to 19
        if (text[0] === '2' && text[1] === '0') {
            b = 'twenty'
            return b
        }
        if (text[0] === '3' && text[1] === '0') {
            b = 'thirty'
            return b
        }
        if (text[0] === '4' && text[1] === '0') {
            b = 'forty'
            return b
        }
        if (text[0] === '5' && text[1] === '0') {
            b = 'fifty'
            return b
        }
        if (text[0] === '6' && text[1] === '0') {
            b = 'sixty'
            return b
        }
        if (text[0] === '7' && text[1] === '0') {
            b = 'seventy'
            return b
        }
        if (text[0] === '8' && text[1] === '0') {
            b = 'eighty'
            return b
        }
        if (text[0] === '9' && text[1] === '0') {
            b = 'ninety'
            return b
        }
        // 10 20 30 40 50 60 70 80 90
        if (text[1] !== '0') {
            if (text[0] === '2') {
                b = 'twenty'
            }
            if (text[0] === '3') {
                b = 'thirty'
            }
            if (text[0] === '4') {
                b = 'forty'
            }
            if (text[0] === '5') {
                b = 'fifty'
            }
            if (text[0] === '6') {
                b = 'sixty'
            }
            if (text[0] === '7') {
                b = 'seventy'
            }
            if (text[0] === '8') {
                b = 'eighty'
            }
            if (text[0] === '9') {
                b = 'ninety'
            }
            if (text[1] === '1') {
                c = 'one'
            }
            if (text[1] === '2') {
                c = 'two'
            }
            if (text[1] === '3') {
                c = 'three'
            }
            if (text[1] === '4') {
                c = 'four'
            }
            if (text[1] === '5') {
                c = 'five'
            }
            if (text[1] === '6') {
                c = 'six'
            }
            if (text[1] === '7') {
                c = 'seven'
            }
            if (text[1] === '8') {
                c = 'eight'
            }
            if (text[1] === '9') {
                c = 'nine'
            }
            return b + ' ' + c;
        }
        // 21-29 31-39 41-49 51-59 61-69 71-79 81-89 91-99
    }
    if (text.length === 3) {
        if (text[0] === '1') {
            a = 'one'
        }
        if (text[0] === '2') {
            a = 'two'
        }
        if (text[0] === '3') {
            a = 'three'
        }
        if (text[0] === '4') {
            a = 'four'
        }
        if (text[0] === '5') {
            a = 'five'
        }
        if (text[0] === '6') {
            a = 'six'
        }
        if (text[0] === '7') {
            a = 'seven'
        }
        if (text[0] === '8') {
            a = 'eight'
        }
        if (text[0] === '9') {
            a = 'nine'
        }
        if (text[1] === '0' && text[2] === '0') {
            return a + ' ' + 'hundred'
        }
        // 100 200 300 400 500 600 700 800 900
        if (text[1] === '0' && text[2] !== '0') {
            if (text[0] === '1') {
                a = 'one'
            }
            if (text[0] === '2') {
                a = 'two'
            }
            if (text[0] === '3') {
                a = 'three'
            }
            if (text[0] === '4') {
                a = 'four'
            }
            if (text[0] === '5') {
                a = 'five'
            }
            if (text[0] === '6') {
                a = 'six'
            }
            if (text[0] === '7') {
                a = 'seven'
            }
            if (text[0] === '8') {
                a = 'eight'
            }
            if (text[0] === '9') {
                a = 'nine'
            }
            if (text[2] === '1') {
                c = 'one'
            }
            if (text[2] === '2') {
                c = 'two'
            }
            if (text[2] === '3') {
                c = 'three'
            }
            if (text[2] === '4') {
                c = 'four'
            }
            if (text[2] === '5') {
                c = 'five'
            }
            if (text[2] === '6') {
                c = 'six'
            }
            if (text[2] === '7') {
                c = 'seven'
            }
            if (text[2] === '8') {
                c = 'eight'
            }
            if (text[2] === '9') {
                c = 'nine'
            }
            return a + ' ' + 'hundred' + ' ' + c
        }
        //101-109 201-209 301-309 401-409 501-509 601-609 701-709 801-809 901-909
        if (text[1] === '1') {
            if (text[0] === '1') {
                a = 'one'
            }
            if (text[0] === '2') {
                a = 'two'
            }
            if (text[0] === '3') {
                a = 'three'
            }
            if (text[0] === '4') {
                a = 'four'
            }
            if (text[0] === '5') {
                a = 'five'
            }
            if (text[0] === '6') {
                a = 'six'
            }
            if (text[0] === '7') {
                a = 'seven'
            }
            if (text[0] === '8') {
                a = 'eight'
            }
            if (text[0] === '9') {
                a = 'nine'
            }
            if (text[2] === '0') {
                b = 'ten'        
            }
            if (text[2] === '1') {
                b = 'eleven'        
            }
            if (text[2] === '2') {
                b = 'twelve'        
            }
            if (text[2] === '3') {
                b = 'thirteen'        
            }
            if (text[2] === '4') {
                b = 'fourteen'        
            }
            if (text[2] === '5') {
                b = 'fifteen'        
            }
            if (text[2] === '6') {
                b = 'sixteen'        
            }
            if (text[2] === '7') {
                b = 'seventeen'        
            }
            if (text[2] === '8') {
                b = 'eighteen'        
            }
            if (text[2] === '9') {
                b = 'nineteen'        
            }
            return a + ' ' + 'hundred' + ' ' + b;
            //110-119 210-219 310-319 410-419 ... 910-919
        }
        if (text[1] !== '1' && text[2] === '0') {
            if (text[0] === '1') {
                a = 'one'
            }
            if (text[0] === '2') {
                a = 'two'
            }
            if (text[0] === '3') {
                a = 'three'
            }
            if (text[0] === '4') {
                a = 'four'
            }
            if (text[0] === '5') {
                a = 'five'
            }
            if (text[0] === '6') {
                a = 'six'
            }
            if (text[0] === '7') {
                a = 'seven'
            }
            if (text[0] === '8') {
                a = 'eight'
            }
            if (text[0] === '9') {
                a = 'nine'
            }
            if (text[1] === '2') {
                b = 'twenty'
            }
            if (text[1] === '3') {
                b = 'thirty'
            }
            if (text[1] === '4') {
                b = 'forty'
            }
            if (text[1] === '5') {
                b = 'fifty'
            }
            if (text[1] === '6') {
                b = 'sixty'
            }
            if (text[1] === '7') {
                b = 'seventy'
            }
            if (text[1] === '8') {
                b = 'eighty'
            }
            if (text[1] === '9') {
                b = 'ninety'
            }
            return a + ' ' + 'hundred' + ' ' + b 
        } 
        //110 120 130 140 150 ... 960 970 980 990
            else {
                if (text[0] === '1') {
                    a = 'one'
                }
                if (text[0] === '2') {
                    a = 'two'
                }
                if (text[0] === '3') {
                    a = 'three'
                }
                if (text[0] === '4') {
                    a = 'four'
                }
                if (text[0] === '5') {
                    a = 'five'
                }
                if (text[0] === '6') {
                    a = 'six'
                }
                if (text[0] === '7') {
                    a = 'seven'
                }
                if (text[0] === '8') {
                    a = 'eight'
                }
                if (text[0] === '9') {
                    a = 'nine'
                }
                if (text[1] === '2') {
                    b = 'twenty'
                }
                if (text[1] === '3') {
                    b = 'thirty'
                }
                if (text[1] === '4') {
                    b = 'forty'
                }
                if (text[1] === '5') {
                    b = 'fifty'
                }
                if (text[1] === '6') {
                    b = 'sixty'
                }
                if (text[1] === '7') {
                    b = 'seventy'
                }
                if (text[1] === '8') {
                    b = 'eighty'
                }
                if (text[1] === '9') {
                    b = 'ninety'
                }
                if (text[2] === '1') {
                    c = 'one'
                }
                if (text[2] === '2') {
                    c = 'two'
                }
                if (text[2] === '3') {
                    c = 'three'
                }
                if (text[2] === '4') {
                    c = 'four'
                }
                if (text[2] === '5') {
                    c = 'five'
                }
                if (text[2] === '6') {
                    c = 'six'
                }
                if (text[2] === '7') {
                    c = 'seven'
                }
                if (text[2] === '8') {
                    c = 'eight'
                }
                if (text[2] === '9') {
                    c = 'nine'
                }
            } return a + ' ' + 'hundred' + ' ' + b + ' ' + c
    }
}
