import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { projects, services } from '@/lib/data';
import { ArrowRight, Award, Building, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animation/Reveal';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/en');
}
