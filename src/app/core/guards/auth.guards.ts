import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const AuthGuard: CanActivateFn = async () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // Si se ejecuta en SSR  (Server-Side Rendering), deja pasar || evita que se vea la pantalla de login y rediriga a la page pese a tener token
  if (!isPlatformBrowser(platformId)) {
    //console.log('SSR: saltando verificación de token');
    return true;
  }

  // Espera un tick para que Angular ya esté hidratado
  await new Promise((resolve) => setTimeout(resolve, 20));

  const token = storage.getItem('token');
  const tokenid = storage.getItem('id');
  //console.log('Token guard (browser):', token);
  //console.log('id(browser):', tokenid);

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};