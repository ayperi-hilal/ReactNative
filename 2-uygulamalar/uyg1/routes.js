import {createAppContainer} from 'react-navigation';
import {createStackNaavigator} from 'react-navigation-stack';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';

const StackNavigation=createStackNaavigator(
     {//bu kısma var olan ektranların adı yazılır. ben bunu sadece örnek olsun diye koydum.bu proje için bunun üzerinde ilgilisayfalar için dü zeltme yapılacaktır.

         Contacts,
         Profile,
     },
     {
     initialRouteName:'Contacts',//ilk olarak hangi sayfanın gösterilmesi gerektiğini ifade eder.
    },
);
export default createAppContainer(StackNavigation);