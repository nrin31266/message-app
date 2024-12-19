export interface Message {
  id: number;
  senderId: string;
  receiverId: string;
  messageType: string;
  content: string;
  createdAt: string;
  updatedAt: any;
  messageStatus: MessageStatus;
  attachments: any[];
}

export interface MessageStatus {
  id: number;
  status: string;
  updatedAt: any;
}
