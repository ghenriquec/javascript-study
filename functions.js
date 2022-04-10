function getScoreTier(score){
  if(score < 20){
    return "E";
  }
  if(score >= 20 && score < 40){
    return "D";
  }
  if(score >= 40 && score < 60){
    return "C";
  }
  if(score >= 60 && score < 80){
    return "B";
  }
  if(score >= 80){
    return "A";
  }
}
getScoreTier(10)
getScoreTier(50)
getScoreTier(80)