import { ChatAdapter, User, Message, UserStatus } from 'ng-chat';
import { Observable } from "rxjs/Rx";
import swal from "sweetalert2";
import {HttpClient} from "@angular/common/http";
import {ChatService} from "../../services/chat.service";
declare const Pusher: any;
export class DemoAdapter extends ChatAdapter {

  constructor(private http: HttpClient, private _db: ChatService){
    super()

  }
  public messages: any;
  private mockedUsers: User[] = [
    {
      id: 1,
      displayName: "EvilCoder",
      avatar: "https://pbs.twimg.com/profile_images/894833370299084800/dXWuVSIb.jpg",
      status: UserStatus.Offline
    }];

  private users: any;

  listFriends(): Observable<User[]> {

    return Observable.of(this.mockedUsers);
  }

  getMessageHistory(userId: any): Observable<Message[]> {

    let mockedHistory: Array<Message>;

    mockedHistory = [
      {
        fromId: 1,
        toId: 999,
        message: "Hi there, just type any message bellow to test this Angular module."
      }
    ];

    return Observable.of(mockedHistory);
  }

  // sendMessage(message: Message): void {
  //
  //   Pusher.logToConsole = true;
  //   let pusher = new Pusher('b1c9dfd0226ff506116d', {
  //     cluster: 'us2',
  //     encrypted: true
  //   });
  //   let channel = pusher.subscribe('my-channel');
  //   channel.bind('my-event', function(data) {
  //     this.messages = data.message;
  //     console.log('data', data)
  //
  //   });
  //
  //   setTimeout(() => {
  //     let replyMessage = new Message();
  //     console.log('this.messages', this.messages)
  //
  //     replyMessage.fromId = message.toId;
  //     replyMessage.toId = message.fromId;
  //     replyMessage.message = "You have typed '" + this.messages + "'";
  //
  //     let user = this.mockedUsers.find(x => x.id == replyMessage.fromId);
  //
  //     this.onMessageReceived(user, replyMessage);
  //   }, 1000);
  // }

  sendMessage(message: any): void{
    fetch('http://127.0.0.1:8000/api/notifications')
      .then(res => {
        Pusher.logToConsole = true;
        let pusher = new Pusher('b1c9dfd0226ff506116d', {
          cluster: 'us2',
          encrypted: true
        });
        let channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {
          let replyMessage = new Message();
          console.log('sdfsdf', replyMessage)
          replyMessage.fromId = message.toId;
          replyMessage.toId = message.fromId;
          replyMessage.message = "You have typed '" + data.message + "'";
          let user = this.mockedUsers.find(x => x.id == replyMessage.fromId);

          this.onMessageReceived(user, replyMessage);
        });

      })
      .catch(error => console.log('error', error))


  }
}
