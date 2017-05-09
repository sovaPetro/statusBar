import firebase from 'firebase';
import  track8 from '../../img/8Track.png';

class ContactsController {
  constructor($state) {
    this.$state = $state;
  }

  $onInit() {
    // temporary varialbles

    this.formArray = [
      {
        name: "user_name",
        placeholder: "User Name",
        isRequired: true,
      },
      {
        name: "password",
        placeholder: "Password",
        isRequired: true,
      },
      {
        name: "mail",
        placeholder: "Email",
        isRequired: true,
      },
    ];
    this.submit = () => {
      console.log(this.formGeneral);
    };
    // temporary section ends
    // array for task
    this.taskBar = [
      {
        period: "start",
        start: null,
        end: null,
        done: false
      },
      {
        period: "second",
        start: null,
        end: null,
        done: false
      },
      {
        period: "third",
        start: null,
        end: null,
        done: false
      },
      {
        period: "fourth",
        start: null,
        end: null,
        done: false
      },
      {
        period: "fifth",
        start: null,
        end: null,
        done: false
      }
    ];
    this.start = {
      begin: 444,
      end: 555,
      status: true,
      fill: "#fff",
    };
    this.second = {
      begin: 444,
      end: 555,
      status: true,
      fill: "#fff",
    };
    this.filledBar = {
      start: "#fff",
      second: "#fff",
      third: "#fff",
      fourth: "#fff",
      fifth: "#fff",
    };
    this.pageReady = true;
    this.underHood = true;
    this.userBtn = "user";
    this.adminBtn = "admin";
    this.supportBtn = "support";
    this.testImg = track8;
    this.editorOptions = {
      useWrapMode : true, 
      showGutter: true, 
      theme:'twilight', 
      mode: 'javascript',
    };
    this.defaultData = `Hello world!`;
    this.showChart = true;
  }

  evaluate(operation) {
    console.log(operation);
     if (operation.done) {
       this.filledBar[operation.period] = "#777";
       console.log(this.filledBar[operation.period]);
       //operation.fill = "#999";
     }
  }

  toggleHood() {
    this.underHood = !this.underHood;
  }

  showBase64(event) {
    // some logic here
  }

}

ContactsController['$inject'] = [
                                  '$state',
                                  '$firebaseObject',
                                  '$firebaseArray',
                                ];
export default ContactsController;
