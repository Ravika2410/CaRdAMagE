function collide(_bullet,_wall)
{
    bulletRightEdge=_bullet.x+_bullet.width;
    wallLeftEdge=_wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
        return true;
    }
    return false;
}