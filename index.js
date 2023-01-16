const studentBall = Number(prompt('oquvchi toplagan balini kiritsin'))
if(studentBall >=0 && studentBall <= 80){
    prompt('kira olmadingiz')
} else if(studentBall >= 81 && studentBall <= 100){
    prompt('siz super contract asosida oqishka qabul qilindingiz')
    const tuitionFree = Number(prompt('kantract miqdori yiliga 3000$ qancha pulingiz bor'))
    if(tuitionFree>=3000){
        prompt('siz oqishka qabul qilindingiz')
    }else {
        prompt('mablag yetarli emas')
    }
} else if(studentBall >= 101 && studentBall <= 150){
    prompt('siz kantrakt asosida oqshka qabul qilindingiz')
    if(tuitionFree>=2000){
        prompt('oqishka qabul qilindingiz')
    } else{
        prompt('mablag yetarli emas')
    }
}
else if(studentBall >= 151 && studentBall <= 180){
    prompt('siz grant asosida oqshka qabul qilindingiz')
} else{
    prompt('notogri qiymat kiritingiz')
}