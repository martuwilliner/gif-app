import {React, useState} from 'react'
import AddCategory from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['Dragon Ball'])

    /* const handleAdd = () => {
        setCategories(cats => [...categories, 'HunterXHunter']);
    };
 */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                { categories.map( category => 
                    (<GifGrid 
                        key={category}
                        category={category}/>)
                )}
            </ol>
        </>
    )
}
