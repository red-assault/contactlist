import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name:string;
  last_name:string;
  phone:string;


  constructor(private contactService: ContactService) { }
  
   deleteContact(id:any)
   {
     var contacts = this.contacts; 
     this.contactService.deleteContact(id)
          .subscribe(data =>{
            if(data.n==1)
            {
              for(var i=0;i< this.contacts.length;i++)
              {
                if(contacts[i]._id == id)
                {
                  contacts.splice(i,1);
                }
              }
            }
          })
   }

  ngOnInit() {
      this.contactService.getContacts()
          .subscribe(contacts =>
            this.contacts = contacts); 
  }

}
