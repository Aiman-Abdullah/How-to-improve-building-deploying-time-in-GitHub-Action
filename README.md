# Strapi application

Recently, I have worked with more than one case where customers were wondering if there is any way to decrease Build/deploy time on GitHub Action.
The time was quite large for building / deploying to Azure App service. And, Total files were large enough (Please see the snapshoot below) 
Note: the time spending was more than 1 hour.


![image](https://user-images.githubusercontent.com/32886468/150437881-121043d5-6c4e-42c4-9135-69c7bafae536.png)

![image](https://user-images.githubusercontent.com/32886468/150438022-5afdcd56-45ff-467a-b0ad-4993aadd7157.png)

![image](https://user-images.githubusercontent.com/32886468/150438027-60495e65-d7ef-42d3-8f71-cf545110e087.png)


The Resolution was easy & Simple. I only needed to Zip/ unzip the Artifacts: ( For more understanding where to add the code below. Please, see workflow/.yaml path )

Build: 
- name: Zip artifact for deployment
        run: zip release.zip ./* -r

 path: release.zip
 
 
 
 Deploy: 
   - name: unzip artifact for deployment
        run: unzip release.zip

      - name: Delete release.zip
        run: rm release.zip




![image](https://user-images.githubusercontent.com/32886468/150438361-65d62fb1-1de4-4a69-b4ec-3797a820a8cc.png)
![image](https://user-images.githubusercontent.com/32886468/150438372-b43dccee-d73f-4538-81e4-2e9eb6d890a5.png)



