import { AppConfig } from '@/utils/AppConfig';
import axios from 'axios';

export class PackagesApi {
  async getAll() {
    var v = await axios.get(AppConfig.api_endpoint + '/api/packages');
    var blogs = v.data.data;
    const result = blogs.map( (d:any) => {
      let v = new Package();
      v.slug = d.attributes.slug;
      v.label = d.attributes.label;
      return v;
    })
    return result;
  }

  async findOne(slug: string) {
    var v = await axios.get(AppConfig.api_endpoint + '/api/package/findOne/' + slug);
    var blogs = v.data.package;
    var result = new Package();
    result.label = blogs.label;
    result.slug = blogs.slug;
    result.sub_packages = blogs.sub_packages;
    result.desc = blogs.desc;
    result.image_url = blogs.hero_img ? blogs.hero_img.url : '';
    return result;
  }
}

class Package {
  label!: string;
  slug!: string;
  sub_packages: any;
  desc!: string;
  image_url!: string;
}