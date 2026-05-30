<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class RegistrationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'fullName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'gender' => 'required|string|in:laki-laki,perempuan',
            'phone' => 'required|string|max:20',
            'age' => 'required|integer|min:18',
            'origin' => 'required|string|max:255',
            'jftCertificate' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
            'senmonkyuCertificate' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
            'skillTestCertificate' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:5120',
            'japanExperience' => 'nullable|string',
            'agreement' => 'required|accepted',
        ]);

        $registration = new Registration([
            'full_name' => $validated['fullName'],
            'email' => $validated['email'],
            'gender' => $validated['gender'],
            'phone_number' => $validated['phone'],
            'age' => $validated['age'],
            'origin' => $validated['origin'],
            'japan_experience' => $validated['japanExperience'],
            'status' => 'pending',
        ]);

        $uploadPath = 'registrations/' . date('Y-m');

        if ($request->hasFile('jftCertificate')) {
            $registration->jft_certificate_path = $request->file('jftCertificate')->store($uploadPath, 'public');
        }

        if ($request->hasFile('senmonkyuCertificate')) {
            $registration->senmonkyu_certificate_path = $request->file('senmonkyuCertificate')->store($uploadPath, 'public');
        }

        if ($request->hasFile('skillTestCertificate')) {
            $registration->skill_test_certificate_path = $request->file('skillTestCertificate')->store($uploadPath, 'public');
        }

        $registration->save();

        return redirect()->back()->with('success', 'Pendaftaran berhasil dikirim. Tim kami akan segera menghubungi Anda.');
    }
}
