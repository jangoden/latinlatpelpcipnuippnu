import { useState, useEffect } from 'react';

type Region = {
    id: string;
    name: string;
};

const BASE_URL = 'https://www.emsifa.com/api-wilayah-indonesia/api';

export function useWilayah() {
    const [provinces, setProvinces] = useState<Region[]>([]);
    const [regencies, setRegencies] = useState<Region[]>([]);
    const [districts, setDistricts] = useState<Region[]>([]);
    const [villages, setVillages] = useState<Region[]>([]);

    const [loading, setLoading] = useState({
        provinces: false,
        regencies: false,
        districts: false,
        villages: false,
    });

    // Fetch Provinces on mount
    useEffect(() => {
        const fetchProvinces = async () => {
            setLoading(prev => ({ ...prev, provinces: true }));
            try {
                const response = await fetch(`${BASE_URL}/provinces.json`);
                const data = await response.json();
                setProvinces(data);
            } catch (error) {
                console.error("Failed to fetch provinces:", error);
            } finally {
                setLoading(prev => ({ ...prev, provinces: false }));
            }
        };
        fetchProvinces();
    }, []);

    // Fetch Regencies (Kabupaten/Kota)
    const fetchRegencies = async (provinceId: string) => {
        if (!provinceId) {
            setRegencies([]);
            return;
        }
        setLoading(prev => ({ ...prev, regencies: true }));
        try {
            const response = await fetch(`${BASE_URL}/regencies/${provinceId}.json`);
            const data = await response.json();
            setRegencies(data);
        } catch (error) {
            console.error("Failed to fetch regencies:", error);
        } finally {
            setLoading(prev => ({ ...prev, regencies: false }));
        }
    };

    // Fetch Districts (Kecamatan)
    const fetchDistricts = async (regencyId: string) => {
        if (!regencyId) {
            setDistricts([]);
            return;
        }
        setLoading(prev => ({ ...prev, districts: true }));
        try {
            const response = await fetch(`${BASE_URL}/districts/${regencyId}.json`);
            const data = await response.json();
            setDistricts(data);
        } catch (error) {
            console.error("Failed to fetch districts:", error);
        } finally {
            setLoading(prev => ({ ...prev, districts: false }));
        }
    };

    // Fetch Villages (Kelurahan/Desa)
    const fetchVillages = async (districtId: string) => {
        if (!districtId) {
            setVillages([]);
            return;
        }
        setLoading(prev => ({ ...prev, villages: true }));
        try {
            const response = await fetch(`${BASE_URL}/villages/${districtId}.json`);
            const data = await response.json();
            setVillages(data);
        } catch (error) {
            console.error("Failed to fetch villages:", error);
        } finally {
            setLoading(prev => ({ ...prev, villages: false }));
        }
    };

    return {
        provinces,
        regencies,
        districts,
        villages,
        loading,
        fetchRegencies,
        fetchDistricts,
        fetchVillages,
    };
}
