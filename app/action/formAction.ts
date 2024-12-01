'use server';

import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

export const formAction = async (formData: FormData) => {

    const client = {
        name: formData.get('name'),
        email: formData.get('email'),
        country: formData.get('country'),
        company: formData.get('company')
    }
    const formulaire = {
        name: formData.get('name'),
        email: formData.get('email'),
        country: formData.get('country'),
        company: formData.get('company'),
        kind_of_website: formData.getAll('kind_of_website'),
        purpose_website: formData.get('purpose_website'),
        competitors: formData.get('competitors'),
        target_website: formData.get('target_website'),
        graphic_chart: formData.get('graphic_chart'),
        design_of_website: formData.get('design_of_website'),
        website_features: formData.getAll('website_features'),
        domain_name: formData.get('domain_name'),
        community_manager: formData.get('community_manager'),
        project_description: formData.get('project_description')
    }

    const orderref = doc(db, 'orders', `order-${Date.now()}`)
    const clientref = doc(db, 'clients', `client-${Date.now()}`)
    await setDoc(orderref, formulaire)
    await setDoc(clientref, client)

}