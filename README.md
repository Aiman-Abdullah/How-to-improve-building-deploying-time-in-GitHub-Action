# Strapi application

How to improve the building & deploying time in GitHub Action?<br>
<br>
If time quite large for building / deploying to Azure App service. And, Total files were large enough (Please see the snapshoot below). the best way is to Zip & Unzip Artifacts files. 

![image](https://user-images.githubusercontent.com/32886468/150437881-121043d5-6c4e-42c4-9135-69c7bafae536.png)

![image](https://user-images.githubusercontent.com/32886468/150438022-5afdcd56-45ff-467a-b0ad-4993aadd7157.png)

![image](https://user-images.githubusercontent.com/32886468/150438027-60495e65-d7ef-42d3-8f71-cf545110e087.png)


The Resolution is easy & Simple. I only needed to Zip/ unzip the Artifacts: ( For more understanding where to add the code below. Please, see workflow/.yaml path )

Build: 
- name: Zip artifact for deployment<br>
        run: zip release.zip ./* -r<br>

  path: release.zip
 
 
 
 Deploy: 
   - name: unzip artifact for deployment<br>
        run: unzip release.zip<br>

   - name: Delete release.zip<br>
        run: rm release.zip




![image](https://user-images.githubusercontent.com/32886468/150438361-65d62fb1-1de4-4a69-b4ec-3797a820a8cc.png)
![image](https://user-images.githubusercontent.com/32886468/150438372-b43dccee-d73f-4538-81e4-2e9eb6d890a5.png)



