import {fnGetAllResources} from "./modules/getAllResources";
import {fnGetResource} from "./modules/GetResource";
import {fnCreateResource} from "./modules/createResource";
import {fnUpdateResource} from "./modules/updateResource";
import {fnDeleteResource} from "./modules/deleteResource";
import {fnFilteringResource} from "./modules/filteringResource";

(()=>{
	fnGetAllResources();
	fnGetResource();
	fnCreateResource();
	fnUpdateResource();
	fnDeleteResource();
	fnFilteringResource();
})()
