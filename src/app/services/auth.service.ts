import { Injectable, WritableSignal, signal } from "@angular/core";

const accessToken = 'accessToken';

@Injectable(
    {providedIn: 'root'}
)
export class AuthService {
    private accessToken = signal<string>('');
 
    setAccessToken(token: string) {
        this.accessToken.set(token);
    }

    getAccessToken(): string | null{
        return this.accessToken();
    }
}
