export interface Message {
  id: number | string;
  senderId: string;
  receiverId: string;
  messageType: MessageType;
  content: string;
  createdAt: string;
  chatType: ChatType;
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
  chatType: ChatType;
  conversationId?: number;
  attachments?: any[];
}

export enum MessageType {
  VOICE = "VOICE",
  IMAGE = "IMAGE",
  FILE = "FILE",
  TEXT = "TEXT",
  VIDEO = "VIDEO",
}

export enum ChatType {
  GROUP = "GROUP",
  PERSONAL = "PERSONAL",
}

export enum Status {
  SENT = "SENT",
  RECEIVED = "RECEIVED",
  READ = "READ",
  SENDING = "SENDING",
}
