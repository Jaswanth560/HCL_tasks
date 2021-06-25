var camelCaseWord="jaswanthKumarVenkataSaiYelchuri";
wordCount=1;
for(iteration=0; iteration<=camelCaseWord.length; iteration++)
{
  if(camelCaseWord[iteration]>="A" && camelCaseWord[iteration]<="Z")
  {
    wordCount++;
  }
}
console.log(wordCount);