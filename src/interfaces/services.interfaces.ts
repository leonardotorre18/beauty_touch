export interface IServices {
  _id: {
    $oid: string
  },
  title: string,
  description: string,
  tag: 
    'EBásica' | 
    'EAvanzada' |
    'Integral' | 
    'Masajes'| 
    'Cejas' | 
    'Bodas',
  body: {
    type: string,
    content: string | Array<string>
  }
}