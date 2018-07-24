This package will be helpful if you are using multiple LUIS models in you project. You just need the endpoint for the luis and the sentence for which you need language understanding.
All functions are promise here.

Function that you can use: - 

           1. getjson(endpoint,sentence)
    
                    This function will return the json response.

           2. gettopintent(endpoint,sentence)

                    This function will return the top scoring intent name.

           3. getallentities(endpoint,sentence)

                    This function will return all the entites present in the sentence.

           4. getentitytype(endpoint,sentence)

                    This function will return all the entites type.

           5. getentitylength(endpoint,sentence)

                    This function will return a integer which will the count of the entity present in 
                    the sentence.

           6. getsentiment(endpoint,sentence)

                    This function will return the sentiment of the sentence


You will need a Luis model up and running to use this package.
Create Luis model https://www.luis.ai/


    