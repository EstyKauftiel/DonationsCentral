import express from 'express';
import DonationsService from './Services/donationsService';
import DonationsApi from './Api/donationsApi';
import DonateService from './Services/donateService';
import DonateApi from './Api/donateApi';
import GroupsService from './Services/groupsService';
import GroupsApi from './Api/groupsApi';

const HOST = "localhost";
const PORT = 5060;

const app = express();

app.use(express.json()); 

const donationsService = new DonationsService();
const donationsApi = new DonationsApi(donationsService);
donationsApi.setRoutes();

const donateService = new DonateService();
const donateApi = new DonateApi(donateService);
donateApi.setRoutes();

const groupsService = new GroupsService();
const groupsApi = new GroupsApi(groupsService);
groupsApi.setRoutes();

app.use('/api/donations' ,donationsApi.router);
app.use('/api/donate' ,donateApi.router);
app.use('/api/groups' ,groupsApi.router);

app.listen(PORT, HOST, () =>{
    console.log("the app is listening on", PORT);
})

