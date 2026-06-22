<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idPath = resource_path('js/Shared/locales/id/common.json');
        $enPath = resource_path('js/Shared/locales/en/common.json');
        $jaPath = resource_path('js/Shared/locales/ja/common.json');

        if (! file_exists($idPath) || ! file_exists($enPath) || ! file_exists($jaPath)) {
            return;
        }

        $idJson = json_decode(file_get_contents($idPath), true);
        $enJson = json_decode(file_get_contents($enPath), true);
        $jaJson = json_decode(file_get_contents($jaPath), true);

        $idFlat = $this->flattenArray($idJson);
        $enFlat = $this->flattenArray($enJson);
        $jaFlat = $this->flattenArray($jaJson);

        foreach ($idFlat as $key => $idValue) {
            $group = explode('.', $key)[0] ?? 'general';
            $type = strlen((string) $idValue) > 100 ? 'textarea' : 'text';

            SiteSetting::updateOrCreate(
                ['key' => $key],
                [
                    'group' => $group,
                    'type' => $type,
                    'value' => [
                        'id' => $idValue,
                        'en' => $enFlat[$key] ?? $idValue,
                        'ja' => $jaFlat[$key] ?? $idValue,
                    ],
                ]
            );
        }
    }

    /**
     * Helper to recursively flatten a multi-dimensional array into dot notation.
     */
    private function flattenArray(array $array, string $prefix = ''): array
    {
        $result = [];
        foreach ($array as $key => $value) {
            $newKey = $prefix === '' ? $key : $prefix.'.'.$key;
            if (is_array($value)) {
                $result = array_merge($result, $this->flattenArray($value, $newKey));
            } else {
                $result[$newKey] = $value;
            }
        }

        return $result;
    }
}
