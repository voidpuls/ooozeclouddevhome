import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// IP adreslerini lokasyon ID'leri ile eşleştiren güvenli bir map
const locationIPs: { [key: string]: string } = {
  'germany': '78.46.170.2',
  'norway': '185.243.216.1',
  'turkey': '185.50.70.47',
  'russia': '185.71.67.1',
  'india': '103.168.30.1',
  'usa': '104.37.173.20',
  'mexico': '189.201.128.1',
  'japan': '223.27.68.216',
  'australia': '51.161.196.97'
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locationId = searchParams.get('location');

  if (!locationId || !locationIPs[locationId]) {
    return NextResponse.json({ error: 'Invalid location' }, { status: 400 });
  }

  try {
    const ip = locationIPs[locationId];
    const platform = process.platform;
    const command = platform === 'win32' 
      ? `ping -n 1 ${ip}`  // Windows
      : `ping -c 1 ${ip}`; // Linux/MacOS

    const { stdout } = await execAsync(command);
    
    // Parse ping time from output
    let pingTime: number;
    if (platform === 'win32') {
      const match = stdout.match(/Average = (\d+)ms/);
      pingTime = match ? parseInt(match[1]) : 0;
    } else {
      const match = stdout.match(/time=(\d+\.?\d*) ms/);
      pingTime = match ? parseFloat(match[1]) : 0;
    }

    return NextResponse.json({ 
      success: true, 
      ping: pingTime,
      location: locationId // IP yerine sadece lokasyon ID'sini dön
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Connection failed',
      location: locationId
    }, { 
      status: 500 
    });
  }
} 