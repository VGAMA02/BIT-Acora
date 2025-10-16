import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const AuthGuard: CanActivateFn = async () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // Si se ejecuta en SSR, deja pasar
  if (!isPlatformBrowser(platformId)) {
    console.log('SSR: saltando verificación de token');
    return true;
  }

  // Espera un tick para que Angular ya esté hidratado
  await new Promise((resolve) => setTimeout(resolve, 20));

  const token = storage.getItem('token');
  console.log('Token guard (browser):', token);

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};