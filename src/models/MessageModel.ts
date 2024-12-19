export interface Message {
  id: number;
  senderId: string;
  receiverId: string;
  messageType: string;
  content: string;
  createdAt: string;
  updatedAt?: any;
  messageStatus: MessageStatus;
  attachments?: any[];
}

export interface MessageStatus {
  id: number;
  status: Status;
  updatedAt: any;
}

export interface ChatMessageReq {
  senderId: string;
  receiverId: string;
  content: string;
  messageType: MessageType;
  conversationId?: number;
  attachments?: any[];
}

export enum MessageType {
  GROUP = "GROUP",
  PERSONAL = "PERSONAL",
}

export enum Status {
    SENT, RECEIVED, READ, SENDING
  }
