export interface GatewayEvent {
    name: string;
    listener(...args: any): void;
} 